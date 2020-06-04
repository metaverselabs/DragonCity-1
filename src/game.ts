const baseScene = new Entity();
engine.addEntity(baseScene);
baseScene.addComponent(new GLTFShape("models/01.glb"));
baseScene.addComponent(new Transform({
  position: new Vector3(264,0,352)
}))