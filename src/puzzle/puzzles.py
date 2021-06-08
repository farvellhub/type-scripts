import sys


#3 10 16 7
#15 13 2 11
#12 8 9 4
#6 14 1 5

#12 * 4 * 11 * 4 * 10 * 4 * ...
#12! * 4 ^12

#

pieces_str = """
2 5 4 0
2 1 4 2
0 1 1 0
4 4 0 3
0 0 4 3
0 0 1 1
1 4 0 0
4 4 3 5
5 5 2 4
1 1 0 5
4 1 0 4
1 0 2 4
3 5 1 2
1 4 2 0
0 1 5 2
1 5 0 4"""

pieces = pieces_str.split("\n")[1:]
pieces = [[int(n) for n in p.split()] for p in pieces]

def run():


    # Solution as an array of piece indexes and rotation
    current_sol = []

    # Start a search
    available_pieces = range(len(pieces))
    search(available_pieces, current_sol)


def search(available_pieces, current_sol):

    # Check validity of solution

    print("Available pieces: %s" % (available_pieces,))
    print("Exploring: %s" % current_sol)

    if len(available_pieces) == 0:
        print("Finished")
        print_puzzle(current_sol)
        sys.exit(1)

    # Generate next piece
    for piece_idx in available_pieces:
        for rot in (0, 1, 2, 3):

            new_piece_pos = (piece_idx, rot)

            is_valid = validate(current_sol, new_piece_pos)

            if is_valid:
                new_sol = list(current_sol) + [new_piece_pos]
                new_available_pieces = [p for p in available_pieces if p != piece_idx]
                search(new_available_pieces, new_sol)


def rotated(sides, rot):
    return sides[rot:] + sides[:rot]

def validate(current_sol, new_piece):
    # Validate corners
    piece_pos = len(current_sol)

    new_piece_idx = new_piece[0]
    new_piece_rot = new_piece[1]
    sides = pieces[new_piece_idx]
    sides_oriented = rotated(sides, new_piece_rot)

    if piece_pos == 0 and (sides_oriented[0] != 0 or sides_oriented[1] != 0):
        return False
    if piece_pos == 3 and (sides_oriented[1] != 0 or sides_oriented[2] != 0):
        return False
    if piece_pos == 12 and (sides_oriented[3] != 0 or sides_oriented[0] != 0):
        return False
    if piece_pos == 15 and (sides_oriented[3] != 0 or sides_oriented[2] != 0):
        return False

    # Validate connections
    row = int(piece_pos / 4)
    column = piece_pos % 4

    if column == 0 and sides_oriented[0] != 0:
        return False
    if column > 0:
        piece_left = current_sol[piece_pos - 1]
        piece_left_oriented = rotated(pieces[piece_left[0]], piece_left[1])
        if piece_left_oriented[2] != sides_oriented[0]:
            return False

    if row == 0 and sides_oriented[1] != 0:
        return False
    if row > 0:
        piece_above = current_sol[piece_pos - 4]
        piece_above_oriented = rotated(pieces[piece_above[0]], piece_above[1])
        if piece_above_oriented[3] != sides_oriented[1]:
            return False

    return True

def print_puzzle(sol):

    for r in range(4):
        for sl in (0, 2):
            for c in range(4):
                pos = r * 4 + c
                piece = pieces[sol[pos][0]]
                piece_oriented = rotated(piece, sol[pos][1])
                print("%s%s " % (piece_oriented[0 + sl], piece_oriented[1 + sl]), end="")
            print()
        print()


if __name__ == "__main__":
    run()
