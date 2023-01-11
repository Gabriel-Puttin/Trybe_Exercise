class Student {
  private _matricula: string;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(matricula: string, nome: string, notasProva: number[], notasTrabalho: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProva = notasProva;
    this._notasTrabalho = notasTrabalho;
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get notasProva(): number[] {
    return this._notasProva;
  }

  set notasProva(value: number[]) {
    if (value.length > 4) {
      throw new Error('O estudante só pode possuir 4 notas de prova');
    }

    this._notasProva = value;
  }

  get notasTrabalho(): number[] {
    return this._notasTrabalho;
  }

  set notasTrabalho(value: number[]) {
    if (value.length > 2) {
      throw new Error('O estudante só pode possuir 4 notas de prova');
    }

    this._notasTrabalho = value;
  }

  public sumGrades(): number {
    return this._notasProva.reduce((acc, curr) => acc + curr, 0) + this._notasTrabalho.reduce((acc, curr) => acc + curr, 0);
  }

  public averageGrades(): number {
    const grades = this.sumGrades();
    return (grades / this._notasProva.length + this._notasTrabalho.length) 
  }
}