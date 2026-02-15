import pygame
import random
# constants for the windows width and height values
SCREEN_WIDTH = 960
SCREEN_HEIGHT = 720

# the RGB values for the colors used in the game
COLOR_BLACK = (0, 0, 0)
COLOR_WHITE = (255, 255, 255)
def main():
  # GAME SETUP

  # initialize the PyGame library (this is absolutely necessary)
  pygame.init()

  # this creates the window for the game
  screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

  # set the window's title
  pygame.display.set_caption("Pong")

  # GAME LOOP
  while True:
    """
    set the back ground color to black
    needs to be called everytime the game updates
    """
    screen.fill(COLOR_BLACK)

    # checking for events
    for event in pygame.event.get():

      # if the user exits the window
      if event.type == pygame.QUIT:

        # exit the function, to finish the game
        return