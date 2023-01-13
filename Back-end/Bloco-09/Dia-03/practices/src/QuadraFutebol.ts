import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import Quadra from "./Quadra";
import normas from "./normas/normasDeUso";

export default class QuadraFutebol extends Quadra {
  public futebolData: IFutebol = normas.futebol;

  public reservar<IFutebol>(param: Date): IAgenda<IFutebol> {
    const protocol = (Math.random() + 1).toString(30).substring(3);

    return {
      protocol,
      date: param,
      rules: this.futebolData as unknown as IFutebol,
    }
  }
}