module MyKeyboardNet.Init exposing(..)
import MyKeyboardNet.Static.Types exposing(..)

import Dict

-- the initial state of the starting place

myInitState = (Dict.fromList [(0, False), (1, False), (2, False), (3, False), (4, False), (5, False), (6, False)
                            , (7, False), (8, False), (9, False), (10, False), (11, False), (12, False), (13, False)
                            , (14, False), (15, False), (16, False), (17, False), (18, False), (19, False), (20, False)
                            , (21, False), (22, False), (23, False), (24, False), (25, False), (26, False), (27, False)
                            , (28, False), (29, False), (30, False), (31, False), (32, False), (33, False), (34, False)
                            , (35, False), (36, False), (37, False), (38, False), (39, False), (40, False), (41, False)
                            , (42, False), (43, False), (44, False), (45, False), (46, False), (47, False), (48, False)
                            , (49, False), (50, False), (51, False), (52, False), (53, False), (54, False), (55, False)
                            , (56, False), (57, False), (58, False), (59, False), (60, False)])

myInitColor = (Dict.fromList [(0, 0), (1, 0), (2, 0), (3, 0), (4, 0), (5, 0), (6, 0), (7, 0), (8, 0), (9, 0), (10, 0)
                            , (11, 0), (12, 0), (13, 0), (14, 0), (15, 0), (16, 0), (17, 0), (18, 0), (19, 0), (20, 0)
                            , (21, 0), (22, 0), (23, 0), (24, 0), (25, 0), (26, 0), (27, 0), (28, 0), (29, 0), (30, 0)
                            , (31, 0), (32, 0), (33, 0), (34, 0), (35, 0), (36, 0), (37, 0), (38, 0), (39, 0), (40, 0)
                            , (41, 0), (42, 0), (43, 0), (44, 0), (45, 0), (46, 0), (47, 0), (48, 0), (49, 0), (50, 0)
                            , (51, 0), (52, 0), (53, 0), (54, 0), (55, 0), (56, 0), (57, 0), (58, 0), (59, 0), (60, 0)])


init : Keyboard
init = Keyboard myInitState (16) myInitColor 0