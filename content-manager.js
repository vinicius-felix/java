// Content Manager JavaScript Functions

let currentEditingFile = null;
let fileContents = {};
let hasUnsavedChanges = false;

// Navigation between sections
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Find and activate the clicked nav link
    event.target.classList.add('active');
}

// File Management Functions
function loadFile(filePath) {
    // Remove active class from all file items
    document.querySelectorAll('.file-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked item
    event.target.closest('.file-item').classList.add('active');
    
    // Switch to editor section
    showSection('editor');
    
    // Update UI
    currentEditingFile = filePath;
    document.getElementById('currentFile').textContent = filePath;
    document.getElementById('editorTitle').textContent = filePath;
    document.getElementById('saveBtn').disabled = false;
    
    // Load file content (simulated)
    loadFileContent(filePath);
}

function loadFileContent(filePath) {
    // Simulate loading file content
    let content = '';
    
    switch(filePath) {
        case 'index.html':
            content = `<html>
<head>
    <title>Java</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="navbar navbar-dark bg-dark box-shadow">
        <div class="container d-flex justify-content-between">
            <a href="./index.html" class="navbar-brand d-flex align-items-center">
                <strong>Home</strong>
            </a>
        </div>
    </div>

    <section class="jumbotron text-center">
        <div class="container">
            <h1 class="jumbotron-heading">Aulas Java</h1>
            <p class="lead text-muted">Conteúdos para as disciplinas de Prática de Programação I, Prática de Programação II e Prática de Programação III da UniRV</p>
        </div>
    </section>
    
    <!-- Resto do conteúdo... -->
</body>
</html>`;
            break;
            
        case 'content/pp1.html':
            content = `<html>
<head>
    <title>Java PP1</title>
    <link rel="stylesheet" type="text/css" href="../styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="navbar navbar-dark bg-dark box-shadow">
        <div class="container d-flex justify-content-between">
            <a href="../index.html" class="navbar-brand d-flex align-items-center">
                <strong>Home</strong>
            </a>
        </div>
    </div>
    
    <div class="container mt-4">
        <h1>Prática de Programação I</h1>
        <p>Conteúdo do curso de introdução à programação Java...</p>
    </div>
</body>
</html>`;
            break;
            
        case 'content/pp2.html':
            content = `<html>
<head>
    <title>Java PP2</title>
    <link rel="stylesheet" type="text/css" href="../styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="navbar navbar-dark bg-dark box-shadow">
        <div class="container d-flex justify-content-between">
            <a href="../index.html" class="navbar-brand d-flex align-items-center">
                <strong>Home</strong>
            </a>
        </div>
    </div>
    
    <div class="container mt-4">
        <h1>Prática de Programação II</h1>
        <p>Estruturas de dados e algoritmos...</p>
    </div>
</body>
</html>`;
            break;
            
        case 'content/pp3.html':
            content = `<html>
<head>
    <title>Java PP3</title>
    <link rel="stylesheet" type="text/css" href="../styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="navbar navbar-dark bg-dark box-shadow">
        <div class="container d-flex justify-content-between">
            <a href="../index.html" class="navbar-brand d-flex align-items-center">
                <strong>Home</strong>
            </a>
        </div>
    </div>
    
    <div class="container mt-4">
        <h1>Prática de Programação III</h1>
        <p>Tipos personalizados e persistência...</p>
    </div>
</body>
</html>`;
            break;
            
        case 'styles.css':
            content = `/* Global Styles */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8f9fa;
}

/* Navigation Styles */
.navbar {
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
}

.navbar-brand {
    font-weight: 600;
}

/* Jumbotron Styles */
.jumbotron {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 4rem 0;
    margin-bottom: 0;
}`;
            break;
            
        default:
            content = '// Arquivo não encontrado ou não suportado';
    }
    
    // Set content in editor
    const editor = document.getElementById('codeEditor');
    editor.value = content;
    fileContents[filePath] = content;
    
    // Update stats
    updateEditorStats();
    
    // Add change listener
    editor.addEventListener('input', function() {
        hasUnsavedChanges = true;
        updateEditorStats();
        document.getElementById('currentFile').className = 'badge bg-warning me-2';
        document.getElementById('currentFile').textContent = filePath + ' (modificado)';
    });
}

function updateEditorStats() {
    const editor = document.getElementById('codeEditor');
    const content = editor.value;
    const lines = content.split('\n').length;
    const chars = content.length;
    
    document.getElementById('editorStats').textContent = `Linhas: ${lines} | Caracteres: ${chars}`;
}

// Page Management Functions
function editPage(filePath) {
    loadFile(filePath);
}

function previewPage(filePath) {
    const modal = new bootstrap.Modal(document.getElementById('previewModal'));
    const iframe = document.getElementById('previewFrame');
    
    // Set iframe source to the file
    iframe.src = filePath;
    
    modal.show();
}

function createNewPage() {
    const fileName = prompt('Nome do arquivo (ex: nova-pagina.html):');
    if (fileName) {
        const template = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nova Página</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="navbar navbar-dark bg-dark box-shadow">
        <div class="container d-flex justify-content-between">
            <a href="index.html" class="navbar-brand d-flex align-items-center">
                <strong>Home</strong>
            </a>
        </div>
    </div>
    
    <div class="container mt-4">
        <h1>Nova Página</h1>
        <p>Conteúdo da nova página...</p>
    </div>
</body>
</html>`;
        
        // Add to file tree
        const fileTree = document.querySelector('.file-tree');
        const newFileItem = document.createElement('div');
        newFileItem.className = 'file-item';
        newFileItem.onclick = () => loadFile(fileName);
        newFileItem.innerHTML = `
            <i class="fas fa-file-code file-icon"></i>
            <span>${fileName}</span>
        `;
        fileTree.appendChild(newFileItem);
        
        // Load in editor
        currentEditingFile = fileName;
        document.getElementById('codeEditor').value = template;
        fileContents[fileName] = template;
        
        // Switch to editor
        showSection('editor');
        document.getElementById('currentFile').textContent = fileName;
        document.getElementById('editorTitle').textContent = fileName;
        document.getElementById('saveBtn').disabled = false;
        
        alert(`Arquivo ${fileName} criado com sucesso!`);
    }
}

// Editor Functions
function saveCurrentFile() {
    if (!currentEditingFile) {
        alert('Nenhum arquivo selecionado para salvar.');
        return;
    }
    
    const content = document.getElementById('codeEditor').value;
    fileContents[currentEditingFile] = content;
    hasUnsavedChanges = false;
    
    // Update UI
    document.getElementById('currentFile').className = 'badge bg-success me-2';
    document.getElementById('currentFile').textContent = currentEditingFile + ' (salvo)';
    
    // Simulate saving to server
    setTimeout(() => {
        document.getElementById('currentFile').className = 'badge bg-info me-2';
        document.getElementById('currentFile').textContent = currentEditingFile;
    }, 2000);
    
    alert(`Arquivo ${currentEditingFile} salvo com sucesso!`);
}

function saveAllChanges() {
    if (hasUnsavedChanges) {
        saveCurrentFile();
    }
    alert('Todas as alterações foram salvas!');
}

function formatCode() {
    const editor = document.getElementById('codeEditor');
    let content = editor.value;
    
    // Simple HTML formatting (basic indentation)
    if (currentEditingFile && currentEditingFile.endsWith('.html')) {
        // Basic HTML formatting
        content = content.replace(/></g, '>\n<');
        content = content.replace(/^\s+/gm, '');
        
        let indentLevel = 0;
        const lines = content.split('\n');
        const formattedLines = lines.map(line => {
            const trimmed = line.trim();
            if (trimmed.startsWith('</')) {
                indentLevel--;
            }
            const formatted = '  '.repeat(Math.max(0, indentLevel)) + trimmed;
            if (trimmed.startsWith('<') && !trimmed.startsWith('</') && !trimmed.endsWith('/>')) {
                indentLevel++;
            }
            return formatted;
        });
        
        content = formattedLines.join('\n');
    }
    
    editor.value = content;
    hasUnsavedChanges = true;
    updateEditorStats();
}

function toggleLineNumbers() {
    alert('Funcionalidade de números de linha será implementada em breve!');
}

function toggleWordWrap() {
    const editor = document.getElementById('codeEditor');
    editor.style.whiteSpace = editor.style.whiteSpace === 'nowrap' ? 'pre-wrap' : 'nowrap';
}

function increaseFontSize() {
    const editor = document.getElementById('codeEditor');
    const currentSize = parseInt(window.getComputedStyle(editor).fontSize);
    editor.style.fontSize = (currentSize + 2) + 'px';
}

function decreaseFontSize() {
    const editor = document.getElementById('codeEditor');
    const currentSize = parseInt(window.getComputedStyle(editor).fontSize);
    if (currentSize > 10) {
        editor.style.fontSize = (currentSize - 2) + 'px';
    }
}

// Media Functions
function uploadMedia() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    
    input.onchange = function(event) {
        const files = event.target.files;
        for (let file of files) {
            alert(`Upload simulado: ${file.name}`);
            // Here you would implement actual file upload
        }
    };
    
    input.click();
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl+S to save
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        saveCurrentFile();
    }
    
    // Ctrl+N to create new file
    if (e.ctrlKey && e.key === 'n') {
        e.preventDefault();
        createNewPage();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('Content Manager initialized');
    
    // Add event listener for editor stats update
    const editor = document.getElementById('codeEditor');
    if (editor) {
        editor.addEventListener('input', updateEditorStats);
        editor.addEventListener('keyup', updateEditorStats);
    }
    
    // Warn about unsaved changes
    window.addEventListener('beforeunload', function(e) {
        if (hasUnsavedChanges) {
            e.preventDefault();
            e.returnValue = '';
        }
    });
});