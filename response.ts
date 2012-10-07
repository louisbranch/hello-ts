interface Message {
  ok?: bool;
  error?: bool;
  message: string;
}

export function toJson(obj : Message) {
  return JSON.stringify(obj);
}
