
const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const jsCode = document.getElementById('js-code');
const previewFrame = document.getElementById('preview-frame');

function updatePreview() {
  const html = htmlCode.value;
  const css = `<style>${cssCode.value}</style>`;
  const js = `<script>${jsCode.value}<\/script>`;
  const previewContent = `${html}${css}${js}`;

  const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
  previewDoc.open();
  previewDoc.write(previewContent);
  previewDoc.close();
}

htmlCode.addEventListener('input', updatePreview);
cssCode.addEventListener('input', updatePreview);
jsCode.addEventListener('input', updatePreview);