def readFile():
    with open('txtfiles/day3.txt', 'r') as f:
        x = f.read().splitlines()
    return list(map(lambda line: line.split(','), x))

switcher = {
    'R': [1, 0],
    'U': [0, 1],
    'L': [-1, 0],
    'D': [0, -1]
}

def posFinder(wire):
    pos = {}
    step = x = y = 0
    for hop in wire:
        jump = switcher[hop[:1]]
        for i in range(0, int(hop[1:])):
            x += jump[0]
            y += jump[1]
            step += 1
            if (x, y) not in pos:
                pos[(x, y)] = step
    return pos

def day3():
    wires = readFile()
    wire1 =  posFinder(wires[0])
    wire2 =  posFinder(wires[1])
    overlap = [x for x in wire1 if x in wire2]
    ansPart1 = min(abs(x) + abs(y) for (x, y) in overlap)
    ansPart2 = min(map(lambda x: wire1[x] + wire2[x], overlap))
    print("answer part 1:", ansPart1, "answer part2:", ansPart2)

day3()
