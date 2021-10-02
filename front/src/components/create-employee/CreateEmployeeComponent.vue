<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Employee</h3>
      </div>

      <div class="card-body">
        <form @:submit.prevent="handleSubmitForm()">
          <!-- INÍCIO DO BLOCO: EMPLOYEE NAME -->
          <div class="form-group mb-3">
            <label class="font-weigth-bold">Nome do empregado</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              placeholder="Nome do funcionário"
              v-model="employee.name"
              :class="{
                'is-invalide': isSubmitted && $v.employeeForm.name.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.employeeForm.nome.requirede"
              class="invalid-feedback"
            >
              O campo do nome do funcionário é obrigatório
            </div>
          </div>
          <!-- FIM DO BLOCO: EMPLOYEE NAME -->

          <!-- INÍCIO DO BLOCO: Job Role -->
          <div class="form-group mb-3">
            <label class="font-weigth-bold">Digite seu cargo</label>
            <input
              type="text"
              id="job_role"
              name="job_role"
              class="form-control"
              placeholder="Cargo"
              v-model="employee.job_role"
              :class="{
                'is-invalide': isSubmitted && $v.employeeForm.job_role.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.employeeForm.job_role.requirede"
              class="invalid-feedback"
            >
              O campo cargo é obrigatório
            </div>
          </div>
          <!-- FIM DO BLOCO: Job Role -->

          <!-- INÍCIO DO BLOCO: Salary -->
          <div class="form-group mb-3">
            <label class="font-weigth-bold">Salário</label>
            <input
              type="number"
              id="salary"
              name="salary"
              class="form-control"
              placeholder="Salário"
              v-model="employee.salary"
              :class="{
                'is-invalide': isSubmitted && $v.employeeForm.salary.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.employeeForm.salary.requirede"
              class="invalid-feedback"
            >
              O campo salário é obrigatório
            </div>
          </div>
          <!-- FIM DO BLOCO: Salary -->

          <!-- INÍCIO DO BLOCO: Nascimento -->
          <div class="form-group mb-3">
            <label class="font-weigth-bold">Nascimento</label>
            <input
              type="date"
              id="birth"
              name="birth"
              class="form-control"
              placeholder="DD/MM/YYYY"
              v-model="employee.birth"
              :class="{
                'is-invalide': isSubmitted && $v.employeeForm.birth.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.employeeForm.birth.requirede"
              class="invalid-feedback"
            >
              O campo nascimento é obrigatório
            </div>
          </div>
          <!-- FIM DO BLOCO: Nascimento -->

          <!-- INÍCIO DO BLOCO: Registro de Usuário -->
          <div class="form-group mb-3">
            <label class="font-weigth-bold">Registro de Usuário</label>
            <input
              type="text"
              class="form-control"
              id="employee_registration"
              name="employee_registration"
              placeholder="Registro de Usuário "
              v-model="employee.employee_registration"
              :class="{
                'is-invalide':
                  isSubmitted && $v.employeeForm.employee_registration.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.employeeForm.birth.requirede"
              class="invalid-feedback"
            >
              O campo regsitro de funcionário é obrigatório
            </div>
          </div>
          <!-- FIM DO BLOCO: Registro de Usuário -->
          <div>
            <button class="btn btn-primary" type="submit">
              Add funcionário
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  comments: {
    name: "CreateEmployeeComponent",
  },
  data() {
    return {
      employee: {
        name: "",
        job_role: "",
        salary: "",
        birth: "",
        employee_registration: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {},
  },
};
</script>

<style>
</style>