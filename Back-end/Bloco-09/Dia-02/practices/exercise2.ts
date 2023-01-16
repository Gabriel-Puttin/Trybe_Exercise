import Person from "./exercise1";

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = 'Mínimo 16 caracteres';
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if(value.length < 16) throw new Error('A matrícula deve possuir no minímo 16 caracteres');
    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if(value.length > 4) throw new Error('O estudante só pode possuir 4 notas de prova');
    this._examsGrades = value;
  }

  get assigmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assigmentsGrades(value: number[]) {
    if(value.length > 2) throw new Error('O estudante só pode possuir 2 notas de trabalhos');
    this._assignmentsGrades = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}