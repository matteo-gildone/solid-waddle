export function setDocumentElementProperty(item, hexColour) {
  document.documentElement.style.setProperty(item, hexColour);
}

export function setThemeMessage(theme) {
  document.getElementById('palette').value = `${theme['--column_bg']},#121016,${theme['--active_item']},${theme['--active_item_text']},${theme['--hover_item']},${theme['--text_color']},${theme['--active_presence']},${theme['--mention_badge']},${theme['--top_nav_bg']},${theme['--top_nav_text']}`;
}

export async function copyToClipboard(e) {
  e.preventDefault();

  const text = document.getElementById('palette').value;
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
}

export function generateReportHTML(title, ratio) {
  return `
        <div class="c-wcag-result">
          <h2 class="c-wcag-result__heading">${title} <div class="c-wcag-result__ratio"><div>Contrast Ratio</div><div>${ratio}:1</div></div></h2>
          <div class="c-wcag-result__container">
            <div class="c-wcag-result__item${ratio >= 4.5 ? ' c-wcag-result__item--success' : ' c-wcag-result__item--fail'}">
              <div>Normal Text</div>
              <div>WCAG AA</div>
            </div>
            <div class="c-wcag-result__item${ratio >= 3 ? ' c-wcag-result__item--success' : ' c-wcag-result__item--fail'}">
              <div>Large Text</div>
              <div>WCAG AA</div>
            </div>
            <div class="c-wcag-result__item${ratio >= 3 ? ' c-wcag-result__item--success' : ' c-wcag-result__item--fail'}">
              <div>UI Components</div>
              <div>WCAG AA</div>
            </div>
            <div class="c-wcag-result__item${ratio >= 7 ? ' c-wcag-result__item--success' : ' c-wcag-result__item--fail'}">
              <div>Normal Text</div>
              <div>WCAG AAA</div>
            </div>
            <div class="c-wcag-result__item${ratio >= 4.5 ? ' c-wcag-result__item--success' : ' c-wcag-result__item--fail'}">
              <div>Large Text</div>
              <div>WCAG AAA</div>
            </div>
          </div>
        </div>
  `;
}