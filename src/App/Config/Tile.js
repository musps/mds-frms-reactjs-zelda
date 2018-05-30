const TileConfig = {
  '0': {
    'id': 0,
    'name': 'floor',
    'className': 'tile-floor',
    'canWalk': true,
    'canBeDestroyed': false
  },
  '1': {
    'id': 1,
    'name': 'stone',
    'className': 'tile-stone',
    'canWalk': false,
    'canBeDestroyed': false
  },
  '2': {
    'id': 2,
    'name': 'grass',
    'className': 'tile-grass',
    'canWalk': false,
    'canBeDestroyed': true,
    'destroyConfig': {
      'hp': 5
    }
  },
  '3': {
    'id': 3,
    'name': 'tree',
    'className': 'tile-tree',
    'canWalk': true,
    'canBeDestroyed': false
  }
}

export default TileConfig
