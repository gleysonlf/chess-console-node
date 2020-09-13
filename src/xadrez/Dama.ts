import Peca from "../tabuleiro/Peca";

export default class Dama extends Peca {
  public toString() {
    return "\u265B"; // unicode to Black QUEEN
  }
}
