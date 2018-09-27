const ngaTaha = ['whānau', 'wairua', 'hinengaro', 'tinana']
const colour1 = ['#4c044c', '#ff4d88', '#ff3300', '#d2c707']
const colour2 = ['#8c198c', '#990033', '#f8882d', '#f2eb6a']

export function sumOverDream (dream) {
  return ngaTaha.map((taha, i) => {
    let datum = {
      name: taha,
      color1: colour1[i],
      color2: colour2[i]
    }

    const allTasks = dream.tasks.filter(task => (task.taha === taha))
    datum.completed = allTasks.filter(task => task.done).length
    datum.remaining = allTasks.length - datum.completed

    return datum
  })
}
