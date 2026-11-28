/**
 * 一覧ページの年度・科目の絞り込み。JavaScriptが無効なときはフォームを出さず、全件を表示する。
 * 条件はURLのクエリ（?year=2016&subject=power-management）と同期する。
 */
export function installQuestionFilter(): void {
  const form = document.querySelector<HTMLFormElement>('.question-filter');
  if (!form || form.dataset.ready) return;
  form.dataset.ready = 'true';
  const selects = [...form.querySelectorAll<HTMLSelectElement>('select[name]')];
  const entries = [
    ...document.querySelectorAll<HTMLElement>('.question-entry[data-year]'),
  ];
  const groups = [
    ...document.querySelectorAll<HTMLElement>('[data-question-group]'),
  ];
  const status = form.querySelector<HTMLElement>('.filter-status');
  const reset = form.querySelector<HTMLButtonElement>('.filter-reset');
  const empty = document.querySelector<HTMLElement>('.filter-empty');

  const params = new URLSearchParams(window.location.search);
  for (const select of selects) {
    const value = params.get(select.name);
    if (value && [...select.options].some((option) => option.value === value))
      select.value = value;
  }

  const apply = (updateUrl: boolean) => {
    const active = selects.filter((select) => select.value);
    let shown = 0;
    for (const entry of entries) {
      const match = active.every(
        (select) => entry.dataset[select.name] === select.value,
      );
      entry.hidden = !match;
      if (match) shown += 1;
    }
    for (const group of groups) {
      const visible = group.querySelectorAll(
        '.question-entry:not([hidden])',
      ).length;
      group.hidden = visible === 0;
      const count = group.querySelector<HTMLElement>(
        ':scope > * > .group-count',
      );
      if (count) count.textContent = `${visible}問`;
    }
    if (status)
      status.textContent = active.length
        ? `${shown}問を表示中（全${entries.length}問）`
        : '';
    if (reset) reset.hidden = active.length === 0;
    if (empty) empty.hidden = shown > 0;
    if (updateUrl) {
      const url = new URL(window.location.href);
      for (const select of selects) {
        if (select.value) url.searchParams.set(select.name, select.value);
        else url.searchParams.delete(select.name);
      }
      window.history.replaceState(window.history.state, '', url);
    }
  };

  form.addEventListener('change', () => apply(true));
  form.addEventListener('submit', (event) => event.preventDefault());
  reset?.addEventListener('click', () => {
    for (const select of selects) select.value = '';
    apply(true);
    selects[0]?.focus();
  });
  form.hidden = false;
  apply(false);
}
