import './style.css'
import {contrast, generateRandomHex} from './utils/colours'
import {setThemeMessage, setDocumentElementProperty, generateReportHTML, copyToClipboard} from './utils/dom';

const reports = [
  {
    title: 'Top Navigation',
    foregroundColour: '--top_nav_text',
    backgroundColour: '--top_nav_bg'
  },
  {
    title: 'Item',
    foregroundColour: '--text_color',
    backgroundColour: '--column_bg'
  },
  {
    title: 'Active item',
    foregroundColour: '--active_item_text',
    backgroundColour: '--active_item'
  },
  {
    title: 'Active item, Column Background',
    foregroundColour: '--active_item',
    backgroundColour: '--column_bg'
  },
  {
    title: 'Hover item',
    foregroundColour: '--text_color',
    backgroundColour: '--hover_item'
  },
  {
    title: 'Mention bedge',
    foregroundColour: '--column_bg',
    backgroundColour: '--mention_badge'
  },
  {
    title: 'Active presence',
    foregroundColour: '--active_presence',
    backgroundColour: '--column_bg'
  },
  {
    title: 'Active presence, active item',
    foregroundColour: '--active_presence',
    backgroundColour: '--active_item'
  }
];

const customProperities = ['--column_bg', '--active_item', '--active_item_text', '--hover_item', '--text_color', '--active_presence', '--mention_badge', '--top_nav_bg', '--top_nav_text'];

function generateTheme() {
  return customProperities
    .reduce((acc, item) => {
      const hexColour = generateRandomHex();
      acc[item] = hexColour;
      setDocumentElementProperty(item, hexColour);
      return acc;
    }, {});
}

function generateRepors (reports) {
  return theme => {
    reports.forEach(report => {
      const {title, backgroundColour, foregroundColour} = report;
      const ratio = (Math.round(contrast(theme[foregroundColour], theme[backgroundColour]) * 100) / 100).toFixed(2);
      document.getElementById('report-container').insertAdjacentHTML('beforeend', generateReportHTML(title, ratio));
    })
  }
}

const theme = generateTheme();
generateRepors(reports)(theme);
setThemeMessage(theme);
document.getElementById('copy-palette').addEventListener('click', copyToClipboard);
document.addEventListener('contextmenu', event => {
  event.preventDefault();
  alert('Come on... seriusly??????');
});





