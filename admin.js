// Admin Panel JavaScript Functions

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

// Course Management Functions
function showAddCourseModal() {
    const modal = new bootstrap.Modal(document.getElementById('addCourseModal'));
    modal.show();
}

function editCourse(courseId) {
    // Simulate editing a course
    alert(`Editando curso: ${courseId}`);
    // Here you would typically open an edit modal or navigate to an edit page
}

function deleteCourse(courseId) {
    if (confirm('Tem certeza que deseja excluir este curso?')) {
        // Simulate course deletion
        alert(`Curso ${courseId} excluído!`);
        // Here you would make an API call to delete the course
    }
}

// Content Management Functions
function showAddContentModal() {
    // Create and show content modal
    const modalHtml = `
        <div class="modal fade" id="addContentModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Adicionar Novo Conteúdo</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="contentTitle" class="form-label">Título</label>
                                        <input type="text" class="form-control" id="contentTitle">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="contentCourse" class="form-label">Curso</label>
                                        <select class="form-select" id="contentCourse">
                                            <option value="pp1">PP1</option>
                                            <option value="pp2">PP2</option>
                                            <option value="pp3">PP3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="contentType" class="form-label">Tipo</label>
                                        <select class="form-select" id="contentType">
                                            <option value="teoria">Teoria</option>
                                            <option value="pratica">Prática</option>
                                            <option value="exemplo">Exemplo</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="contentStatus" class="form-label">Status</label>
                                        <select class="form-select" id="contentStatus">
                                            <option value="rascunho">Rascunho</option>
                                            <option value="publicado">Publicado</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="contentDescription" class="form-label">Descrição</label>
                                <textarea class="form-control" id="contentDescription" rows="3"></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="contentBody" class="form-label">Conteúdo</label>
                                <textarea class="form-control" id="contentBody" rows="10" placeholder="Digite o conteúdo em HTML..."></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary" onclick="saveContent()">Salvar Conteúdo</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('addContentModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('addContentModal'));
    modal.show();
}

function saveContent() {
    const title = document.getElementById('contentTitle').value;
    const course = document.getElementById('contentCourse').value;
    const type = document.getElementById('contentType').value;
    const status = document.getElementById('contentStatus').value;
    const description = document.getElementById('contentDescription').value;
    const body = document.getElementById('contentBody').value;
    
    if (!title || !description || !body) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Simulate saving content
    alert('Conteúdo salvo com sucesso!');
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addContentModal'));
    modal.hide();
    
    // Here you would typically make an API call to save the content
    console.log('Saving content:', { title, course, type, status, description, body });
}

// Exercise Management Functions
function showAddExerciseModal() {
    const modalHtml = `
        <div class="modal fade" id="addExerciseModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Adicionar Novo Exercício</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exerciseTitle" class="form-label">Título</label>
                                        <input type="text" class="form-control" id="exerciseTitle">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exerciseCourse" class="form-label">Curso</label>
                                        <select class="form-select" id="exerciseCourse">
                                            <option value="pp1">PP1</option>
                                            <option value="pp2">PP2</option>
                                            <option value="pp3">PP3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exerciseDifficulty" class="form-label">Dificuldade</label>
                                        <select class="form-select" id="exerciseDifficulty">
                                            <option value="facil">Fácil</option>
                                            <option value="medio">Médio</option>
                                            <option value="dificil">Difícil</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exerciseStatus" class="form-label">Status</label>
                                        <select class="form-select" id="exerciseStatus">
                                            <option value="rascunho">Rascunho</option>
                                            <option value="ativo">Ativo</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="exerciseDescription" class="form-label">Descrição do Problema</label>
                                <textarea class="form-control" id="exerciseDescription" rows="4" placeholder="Descreva o problema que o aluno deve resolver..."></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="exerciseHints" class="form-label">Dicas (opcional)</label>
                                <textarea class="form-control" id="exerciseHints" rows="3" placeholder="Dicas para ajudar o aluno..."></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="exerciseSolution" class="form-label">Solução</label>
                                <textarea class="form-control" id="exerciseSolution" rows="8" placeholder="Cole aqui o código da solução..."></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary" onclick="saveExercise()">Salvar Exercício</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('addExerciseModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('addExerciseModal'));
    modal.show();
}

function saveExercise() {
    const title = document.getElementById('exerciseTitle').value;
    const course = document.getElementById('exerciseCourse').value;
    const difficulty = document.getElementById('exerciseDifficulty').value;
    const status = document.getElementById('exerciseStatus').value;
    const description = document.getElementById('exerciseDescription').value;
    const hints = document.getElementById('exerciseHints').value;
    const solution = document.getElementById('exerciseSolution').value;
    
    if (!title || !description || !solution) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Simulate saving exercise
    alert('Exercício salvo com sucesso!');
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addExerciseModal'));
    modal.hide();
    
    // Here you would typically make an API call to save the exercise
    console.log('Saving exercise:', { title, course, difficulty, status, description, hints, solution });
}

// Filter functions
function filterExercises() {
    const courseFilter = document.getElementById('courseFilter').value;
    const difficultyFilter = document.getElementById('difficultyFilter').value;
    
    // Here you would implement the actual filtering logic
    console.log('Filtering exercises:', { courseFilter, difficultyFilter });
}

// Settings functions
function saveSettings() {
    const siteTitle = document.getElementById('siteTitle').value;
    const siteDescription = document.getElementById('siteDescription').value;
    const footerYear = document.getElementById('footerYear').value;
    
    // Simulate saving settings
    alert('Configurações salvas com sucesso!');
    
    // Here you would typically make an API call to save the settings
    console.log('Saving settings:', { siteTitle, siteDescription, footerYear });
}

// Backup functions
function createBackup() {
    alert('Backup criado com sucesso!');
    // Here you would implement the backup functionality
}

function restoreBackup() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,.zip';
    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            alert(`Restaurando backup: ${file.name}`);
            // Here you would implement the restore functionality
        }
    };
    input.click();
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for filters
    const courseFilter = document.getElementById('courseFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');
    
    if (courseFilter) {
        courseFilter.addEventListener('change', filterExercises);
    }
    
    if (difficultyFilter) {
        difficultyFilter.addEventListener('change', filterExercises);
    }
    
    // Add event listener for settings form
    const settingsForm = document.querySelector('#settings form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveSettings();
        });
    }
    
    console.log('Admin panel initialized');
});