# Video Improvisation Scoring System 0
This is a piece I wrote as part of Don-Paul Kahl's residency at New England Conservatory of Music. It uses various video processes to control three different methods of improvisation that are quickly switched between. The piece was originally written to be performed by a solo saxophonist but it can be adapted to be played by any instrument. 

As a note: I was really trying to investigate degrees of imprecision with notation in this piece. Which is to say in short, much of the notation is designed to have parts that overwhelm or are unclear. I have found this leads to interesting and unpredictable decisions that must be made in the moment by a performer. 

I have done my best with the descriptions below but the performance instructions are most definitely not complete. If you have any questions, feel free to reach out to me in some capacity. 

## Max Setup
The Max patches use Bach and the Flucoma so having them installed would be a good idea. If you are unsure of how to do this, open the package manager in Max and search for them and click install.

## Performance Instructions

### Effect 1: Base Video 
The screen can be four different colors: red, green, blue, or white, with each color representing a different space the performer is improvising in. 
Red: Timbre of breath (unpitched sound). The left side of the screen shows the current range of exploration. These numbers range from 1 to 10 with 1 being the most open sound ("ahhh") to 10 being the brightest ("tsssss" or something of the sort)
Green: Timbre of a single pitch. The pitch is shown in the bottom right corner. It can be played in any octave but once an octave is chosen, it must be stuck to until the next color change. 
1: darkest sound 
10: brightest
Blue: Pitch space. Each line on the screen represents a note in the set shown in the bottom right hand corner.
White: Freely chose from any of the other three scopes. The shifts between the three should be extremely rapid.

In this section, the video zooms in and out dictating either breath direction or distance from the mouthpiece, as chosen by the performer. 

### Effect 2: Pinching
Functions like a video game. The pinch location on the screen dictates where in the pitch space to center the action and the degree in which you should move around the space. The bottom right shows the current pitch space in which you are opperating. The goal is for you to unpinch (you can see your current progress in the bottom left). Do not start the next unpinch until the screen is completely back to being pinched. 

### Effect 3: Big staff on the screen
The scoring system and the performer opperate in a dialog with the scoring system attempting to transcribe the performer and the performer attempting to read the transcriptions created by the system. 


### other things of note
There are certain notes that trigger the video to pause... find those if you wish for even more of a fun performance.

## notes on the code and performance:
Please let me know if something does not work. I am not claiming this piece's code is beautiful but it has worked in the performances I have done pretty reliably. In performance, I have controlled the effects through a touch osc patch and you can easily make something similiar. I have had one performance done with the score being shown on a large screen and one with it just being shown on an iPad to the performer. I feel as if it works better in the latter case as on the large screen, the audience was very concerned with the spectical of the notation.  

As a final note, I stress again that the notation is meant to overwhelm. As a performer, use the score as a guide but latch onto what you can and focus on it pushing your improvisational decisions.