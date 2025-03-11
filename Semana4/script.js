// Função construtora para Professor
function Professor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, area, lattes) {
    this.nome = nome;
    this.email = email;
    this.dataNascimento = dataNascimento;
    this.telefoneFixo = telefoneFixo;
    this.telefoneCelular = telefoneCelular;
    this.matricula = matricula;
    this.area = area;
    this.lattes = lattes;

    this.apresentar = function () {
        console.log(`Professor ${this.nome}, Email: ${this.email}, Nascimento: ${this.dataNascimento}, 
        Tel. Fixo: ${this.telefoneFixo}, Celular: ${this.telefoneCelular}, Matrícula: ${this.matricula}, 
        Área: ${this.area}, Lattes: ${this.lattes}`);
    };
}

// Função construtora para Aluno
function Aluno(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, curso) {
    this.nome = nome;
    this.email = email;
    this.dataNascimento = dataNascimento;
    this.telefoneFixo = telefoneFixo;
    this.telefoneCelular = telefoneCelular;
    this.matricula = matricula;
    this.curso = curso;

    this.apresentar = function () {
        console.log(`Aluno ${this.nome}, Email: ${this.email}, Nascimento: ${this.dataNascimento}, 
        Tel. Fixo: ${this.telefoneFixo}, Celular: ${this.telefoneCelular}, Matrícula: ${this.matricula}, 
        Curso: ${this.curso}`);
    };
}

// Função construtora do Formulário
function Formulario() {
    this.professorRadio = document.getElementById('professor');
    this.alunoRadio = document.getElementById('aluno');
    this.areaProfessor = document.getElementById('areaProfessor');
    this.lattesProfessor = document.getElementById('lattesProfessor');
    this.cursoAluno = document.getElementById('cursoAluno');
    this.nomeInput = document.getElementById('nome');
    this.emailInput = document.getElementById('email');
    this.dataNascimentoInput = document.getElementById('dataNascimento');
    this.telefoneFixoInput = document.getElementById('telefoneFixo');
    this.telefoneCelularInput = document.getElementById('telefoneCelular');
    this.matriculaInput = document.getElementById('matricula');
    this.areaInput = document.getElementById('area');
    this.lattesInput = document.getElementById('lattes');
    this.cursoInput = document.getElementById('curso');
    this.emailErro = document.getElementById('emailErro');

    this.init = function () {
        document.getElementById('cadastroForm').addEventListener('change', this.toggleCampos.bind(this));
        document.getElementById('cadastroForm').addEventListener('submit', this.enviarFormulario.bind(this));
    };

    this.toggleCampos = function () {
        const tipoSelecionado = document.querySelector('input[name="tipo"]:checked');

        if (tipoSelecionado) {
            this.areaProfessor.classList.toggle('hidden', tipoSelecionado.value !== 'professor');
            this.lattesProfessor.classList.toggle('hidden', tipoSelecionado.value !== 'professor');
            this.cursoAluno.classList.toggle('hidden', tipoSelecionado.value !== 'aluno');
        }
    };

    this.validarEmail = function () {
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.emailInput.value);

        if (!emailValido) {
            this.emailErro.textContent = "Digite um e-mail válido.";
            return false;
        } else {
            this.emailErro.textContent = "";
            return true;
        }
    };

    this.enviarFormulario = function (event) {
        event.preventDefault();

        if (!this.validarEmail()) {
            return;
        }

        // Capturando os dados do formulário
        const nome = this.nomeInput.value;
        const email = this.emailInput.value;
        const dataNascimento = this.dataNascimentoInput.value;
        const telefoneFixo = this.telefoneFixoInput.value;
        const telefoneCelular = this.telefoneCelularInput.value;
        const matricula = this.matriculaInput.value;

        if (this.professorRadio.checked) {
            const area = this.areaInput.value;
            const lattes = this.lattesInput.value;
            const professor = new Professor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, area, lattes);
            professor.apresentar();
        } else if (this.alunoRadio.checked) {
            const curso = this.cursoInput.value;
            const aluno = new Aluno(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, curso);
            aluno.apresentar();
        } else {
            console.log("Selecione um tipo (Professor ou Aluno).");
        }

        alert("Formulário enviado com sucesso!");

        document.getElementById('cadastroForm').reset();
        this.toggleCampos();
    };
}

document.addEventListener("DOMContentLoaded", function() {
    const formulario = new Formulario();
    formulario.init();
});
