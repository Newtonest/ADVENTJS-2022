function sortToys(toys, positions) {
    const sortedPositions = [...positions].sort((a, b) => a - b)
    return positions.map((n, i) =>
      toys[
        positions.indexOf(sortedPositions[i])
      ]
    )
  }










