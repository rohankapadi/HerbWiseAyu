export interface ChatRequest {
  message: string;
}

export interface ChatServiceResult {
  ok: boolean;
  status: number;
  text: string; // unified text for UI
  raw: string;  // raw response body
  data?: any;   // parsed JSON if available
}

const WEBHOOK_URL = 'https://rohan-kapadi.app.n8n.cloud/webhook/chat';

export async function sendChat(req: ChatRequest): Promise<ChatServiceResult> {
  const response = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ message: req.message }),
  });

  const raw = await response.text();
  let data: any | undefined;

  if (raw) {
    try {
      data = JSON.parse(raw);
    } catch {
      // non-JSON body, leave data undefined
    }
  }

  // Normalize various possible n8n response shapes
  let text = '';
  if (data && typeof data === 'object') {
    const candidates: any[] = [
      data.response,
      data.message,
      data.reply,
      data.output,
      data.text,
      data.content,
      data.answer,
      Array.isArray(data) ? data[0] : undefined,
    ].filter(Boolean);

    const pickFromObject = (obj: any) => obj?.text || obj?.message || obj?.content || obj?.answer;
    const firstCandidate = candidates.find((v) => typeof v === 'string')
      || (typeof candidates[0] === 'object' ? pickFromObject(candidates[0]) : undefined);

    text = (firstCandidate as string) || raw || '';
  } else if (typeof data === 'string') {
    text = data;
  } else {
    text = raw || '';
  }

  if (!response.ok) {
    // Build a useful error surface but still return any text we have
    if (!text) {
      text = (data && typeof data === 'object' && (data.message || data.error || data.detail))
        || raw
        || 'Unable to process request';
    }
  }

  return {
    ok: response.ok,
    status: response.status,
    text,
    raw,
    data,
  };
}
