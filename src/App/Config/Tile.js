const TileConfig = {
  '0': {
    'name': 'dirt',
    'className': 'tile-zero',
    'canWalk': true,
    'canBeDestroyed': false
  },
  '1': {
    'name': 'wall',
    'className': 'tile-one',
    'canWalk': false,
    'canBeDestroyed': false
  },
  '2': {
    'name': 'wall2',
    'className': 'tile-two',
    'canWalk': false,
    'canBeDestroyed': true,
    'destroyConfig': {
      'hp': 5
    }
  }
}

export default TileConfig
