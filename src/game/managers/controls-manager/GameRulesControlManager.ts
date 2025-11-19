import { Input, Scene } from 'phaser';

export class GameRulesControlManager {
  private _saveGameControl?: Input.Keyboard.Key;
  private _loadGameControl?: Input.Keyboard.Key;

  constructor(scene: Scene) {
    this._setUpControls(scene);
  }

  private _setUpControls(scene: Scene) {
    if (scene.input.keyboard) {
      this._saveGameControl = scene.input.keyboard.addKey(
        Input.Keyboard.KeyCodes.S
      );

      this._loadGameControl = scene.input.keyboard.addKey(
        Input.Keyboard.KeyCodes.L
      );
    }
  }

  public get saveGameControl() {
    return this._saveGameControl;
  }

  public get loadGameControl() {
    return this._loadGameControl;
  }
}
