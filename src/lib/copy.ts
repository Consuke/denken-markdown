/** HTML属性・JSONペイロードはいずれも元Markdown ASTから生成。 */
export function installCopyControls(): void {
  const live = document.querySelector<HTMLElement>('#copy-status');
  const payloadNode = document.querySelector('#copy-sources');
  const payload: Record<string, string> = payloadNode
    ? JSON.parse(payloadNode.textContent ?? '{}')
    : {};
  const buttons = document.querySelectorAll<HTMLButtonElement>(
    '[data-copy-key], [data-copy-tex]',
  );
  let attempt = 0;
  for (const button of buttons) {
    button.hidden = false;
    button.addEventListener('click', async () => {
      const current = ++attempt;
      const value =
        button.dataset.copyTex ?? payload[button.dataset.copyKey ?? ''];
      if (live) live.textContent = '';
      button.disabled = true;
      let message: string;
      try {
        if (value === undefined || !navigator.clipboard?.writeText)
          throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(value);
        message = 'コピーしました';
      } catch {
        message = 'コピーできませんでした';
      } finally {
        button.disabled = false;
      }
      if (current === attempt && live) live.textContent = message;
    });
  }
}
