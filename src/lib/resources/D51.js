/*!
 * Copyright 1993,1998,2014 Toyoda Masashi (mtoyoda@acm.org)
 * released under MIT license
 * https://opensource.org/licenses/mit-license.php
 */

const D51STR1 = '      ====        ________                ___________ ';
const D51STR2 = '  _  _|  |_______/        \\__I_I_____===__|_________| ';
const D51STR3 = '   |(_)---  |   H\\________/ |   |        =|___ ___|   ';
const D51STR4 = '   /     |  |   H  |  |     |   |         ||_| |_||   ';
const D51STR5 = '  |      |  |   H  |__--------------------| [___] |   ';
const D51STR6 = '  | ________|___H__/__|_____/[][]~\\_______|       |   ';
const D51STR7 = '  |/ |   |-----------I_____I [][] []  D   |=======|__ ';

const D51WHL11 = '__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__ ';
const D51WHL12 = ' |/-=|___|=    ||    ||    ||    |_____/~\\___/        ';
const D51WHL13 = '  \\_/      \\_O=====O=====O=====O/      \\_/            ';

const D51WHL21 = '__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__ ';
const D51WHL22 = ' |/-=|___|=   O=====O=====O=====O|_____/~\\___/        ';
const D51WHL23 = '  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            ';

const D51WHL31 = '__/ =| o |=-~O=====O=====O=====O\\ ____Y___________|__ ';
const D51WHL32 = ' |/-=|___|=    ||    ||    ||    |_____/~\\___/        ';
const D51WHL33 = '  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            ';

const D51WHL41 = '__/ =| o |=-O=====O=====O=====O \\ ____Y___________|__ ';
const D51WHL42 = ' |/-=|___|=    ||    ||    ||    |_____/~\\___/        ';
const D51WHL43 = '  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            ';

const D51WHL51 = '__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__ ';
const D51WHL52 = ' |/-=|___|=O=====O=====O=====O   |_____/~\\___/        ';
const D51WHL53 = '  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            ';

const D51WHL61 = '__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__ ';
const D51WHL62 = ' |/-=|___|=    ||    ||    ||    |_____/~\\___/        ';
const D51WHL63 = '  \\_/      \\O=====O=====O=====O_/      \\_/            ';


const COAL01 = '                              ';
const COAL02 = '                              ';
const COAL03 = '    _________________         ';
const COAL04 = '   _|                \\_____A  ';
const COAL05 = ' =|                        |  ';
const COAL06 = ' -|                        |  ';
const COAL07 = '__|________________________|_ ';
const COAL08 = '|__________________________|_ ';
const COAL09 = '   |_D__D__D_|  |_D__D__D_|   ';
const COAL10 = '    \\_/   \\_/    \\_/   \\_/    ';


const train = {
  body: [
    [D51STR1, D51STR2, D51STR3, D51STR4, D51STR5, D51STR6, D51STR7, D51WHL11, D51WHL12, D51WHL13],
    [D51STR1, D51STR2, D51STR3, D51STR4, D51STR5, D51STR6, D51STR7, D51WHL21, D51WHL22, D51WHL23],
    [D51STR1, D51STR2, D51STR3, D51STR4, D51STR5, D51STR6, D51STR7, D51WHL31, D51WHL32, D51WHL33],
    [D51STR1, D51STR2, D51STR3, D51STR4, D51STR5, D51STR6, D51STR7, D51WHL41, D51WHL42, D51WHL43],
    [D51STR1, D51STR2, D51STR3, D51STR4, D51STR5, D51STR6, D51STR7, D51WHL51, D51WHL52, D51WHL53],
    [D51STR1, D51STR2, D51STR3, D51STR4, D51STR5, D51STR6, D51STR7, D51WHL61, D51WHL62, D51WHL63]
  ],

  bodyPatterns: 6,

  length: 54,

  height: 10,

  funnelPosition: 7,
};


const coal = {
  body: [[COAL01, COAL02, COAL03, COAL04, COAL05, COAL06, COAL07, COAL08, COAL09, COAL10]],
  bodyPatterns: 1,
  length: 27,
  height: 10
};

module.exports = {
  train,
  coal
};
