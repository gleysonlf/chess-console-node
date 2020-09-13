import Peca from "../tabuleiro/Peca";

export default class Cavalo extends Peca {
  public toString() {
    return "\u265E"; // unicode to Black KNIGHT
  }
}
