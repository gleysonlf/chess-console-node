import Peca from "../tabuleiro/Peca";

export default class Rei extends Peca {
  public toString() {
    return "\u265A"; // unicode to Black KING 
  }
}
