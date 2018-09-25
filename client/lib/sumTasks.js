const ngaTaha = ['whānau', 'wairua', 'heningaro', 'tinana']
const colour1 = ['darkred', 'orangered', 'darkblue', 'darkgreen']
const colour2 = ['red', 'orange', 'blue', 'green']

export function sumOverDream (dream) {
  return ngaTaha.map((taha, i) => {
    let datum = {
      name: taha,
      color1: colour1[i],
      color2: colour2[i],
    }

    const allTasks = dream.tasks.filter(task => (task.taha === taha))
    datum.completed = allTasks.filter(task => task.done).length
    datum.remaining = allTasks.length - datum.completed

    return datum
  })
}