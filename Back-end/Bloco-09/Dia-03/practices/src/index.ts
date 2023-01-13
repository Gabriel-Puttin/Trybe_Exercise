import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const C = new Clube();
const Q = new QuadraFutebol();
C.adicionarQuadra(Q);
const dataFut = C.buscarQuadra<QuadraFutebol>(0).reservar(new Date('2023-01-13'));
console.log(dataFut);