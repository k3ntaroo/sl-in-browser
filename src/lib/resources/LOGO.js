/*!
 * Copyright 1993,1998,2014 Toyoda Masashi (mtoyoda@acm.org)
 *
 * Everyone is permitted to do anything on this program including copying,
 * modifying, and improving, unless you try to pretend that you wrote it.
 * i.e., the above copyright notice has to appear in all copies.
 * THE AUTHOR DISCLAIMS ANY RESPONSIBILITY WITH REGARD TO THIS SOFTWARE.
 */

#define LOGOHIGHT         6
#define LOGOFUNNEL       4
#define LOGOLENGTH      84
#define LOGOPATTERNS     6

const LOGO1  = "     ++      +------ ";
const LOGO2  = "     ||      |+-+ |  ";
const LOGO3  = "   /---------|| | |  ";
const LOGO4  = "  + ========  +-+ |  ";

const LWHL11 = " _|--/~\\------/~\\-+  ";
const LWHL12 = "//// O========O_/    ";

const LWHL21 = " _|--/~\\------/~\\-+  ";
const LWHL22 = "//// \\O========O/    ";

const LWHL31 = " _|--/~\\------/~\\-+  ";
const LWHL32 = "//// \\_O========O    ";

const LWHL41 = " _|--/~O========O-+  ";
const LWHL42 = "//// \\_/      \\_/    ";

const LWHL51 = " _|--/O========O\\-+  ";
const LWHL52 = "//// \\_/      \\_/    ";

const LWHL61 = " _|--O========O~\\-+  ";
const LWHL62 = "//// \\_/      \\_/    ";

const LCOAL1 = "____                 ";
const LCOAL2 = "|   \\@@@@@@@@@@@     ";
const LCOAL3 = "|    \\@@@@@@@@@@@@@_ ";
const LCOAL4 = "|                  | ";
const LCOAL5 = "|__________________| ";
const LCOAL6 = "   (O)       (O)     ";

const LCAR1  = "____________________ ";
const LCAR2  = "|  ___ ___ ___ ___ | ";
const LCAR3  = "|  |_| |_| |_| |_| | ";
const LCAR4  = "|__________________| ";
const LCAR5  = "|__________________| ";
const LCAR6  = "   (O)        (O)    ";

const train = {
  body: [
    [LOGO1, LOGO2, LOGO3, LOGO4, LWHL11, LWHL12],
    [LOGO1, LOGO2, LOGO3, LOGO4, LWHL21, LWHL22],
    [LOGO1, LOGO2, LOGO3, LOGO4, LWHL31, LWHL32],
    [LOGO1, LOGO2, LOGO3, LOGO4, LWHL41, LWHL42],
    [LOGO1, LOGO2, LOGO3, LOGO4, LWHL51, LWHL52],
    [LOGO1, LOGO2, LOGO3, LOGO4, LWHL61, LWHL62]
  ],

  bodyPatterns: 6,
  length: 21,
  height: 6,
  funnelPosition: 4,
};

const coal = {
  body: [[LCOAL1, LCOAL2, LCOAL3, LCOAL4, LCOAL5, LCOAL6]],
  bodyPatterns: 1,
  length: 21,
  height: 6,
};

const car = {
  body: [[LCAR1, LCAR2, LCAR3, LCAR4, LCAR5, LCAR6]],
  bodyPatterns: 1,
  length: 21,
  height: 6,
}

module.exports = {
  train,
  coal,
  car
}
