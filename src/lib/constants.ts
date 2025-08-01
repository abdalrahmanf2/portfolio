import type { Project } from "./types";

export const ASCII_ART = `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⡿⠿⢿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠛⠉⠉⠉⠙⠻⣅⠀⠈⢧⠀⠈⠛⠉⠉⢻⣿⣿
⣿⣿⣿⣿⣿⣿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⣤⡶⠟⠀⠀⣈⠓⢤⣶⡶⠿⠛⠻⣿
⣿⣿⣿⣿⣿⢣⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣀⣴⠶⠿⠿⢷⡄⠀⠀⢀⣤⣾⣿
⣿⣿⣿⣿⣡⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣦⣤⣤⡀⠀⢷⡀⠀⠀⣻⣿⣿
⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡈⠛⠶⠛⠃⠈⠈⢿⣿⣿
⣿⣿⠟⠘⠀⠀⠀⠀⠀⠀⠀⠀⢀⡆⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠈⣿⣿
⣿⠏⠀⠁⠀⠀⠀⠀⠀⠀⠀⢀⣶⡄⠀⠀⠀⠀⠀⠀⣡⣄⣿⡆⠀⠀⠀⠀⣿⣿
⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠚⠛⠛⢛⣲⣶⣿⣷⣉⠉⢉⣥⡄⠀⠀⠀⠨⣿⣿
⡇⢠⡆⠀⠀⢰⠀⠀⠀⠀⢸⣿⣧⣠⣿⣿⣿⣿⣿⣿⣷⣾⣿⡅⠀⠀⡄⠠⢸⣿
⣧⠸⣇⠀⠀⠘⣤⡀⠀⠀⠘⣿⣿⣿⣿⣿⠟⠛⠻⣿⣿⣿⡿⢁⠀⠀⢰⠀⢸⣿
⣿⣷⣽⣦⠀⠀⠙⢷⡀⠀⠀⠙⠻⠿⢿⣷⣾⣿⣶⠾⢟⣥⣾⣿⣧⠀⠂⢀⣿⣿
⣿⣿⣿⣿⣷⣆⣠⣤⣤⣤⣀⣀⡀⠀⠒⢻⣶⣾⣿⣿⣿⣿⣿⣿⣿⢀⣀⣾⣿⣿
`;
export const HOUSE_ASCII_ART = `
⣾⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⠿⠿⠛⠛⠋⠉⠙⠉⠙⠋⠛⡛⠝⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣽⣿⣯⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣽⣯⣿⣿⣿⣽⣯⣿⣿⣽⣯⣿⣿⣽⣯⣿⣿⣭⣿⣽⣯⣿⣿⣿⢿⣿⣯⠿⠯⠙⠉⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠈⠙⠻⣿⣻⡿⡟⣿⣿⣿⣯⣿⣽⣿⣽⣯⣿⣽⣿⣽⣯⣿⣽⣯⣿⣽⣯⣿⣽⣯⣿⣽⣯⣿⣽⣯⣿⣽⣯⣿⣽⣿⣽⣯⣿⣿⣽
⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⡿⣿⣿⣿⠛⠯⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠹⢟⡻⣎⢿⢿⣿⣿⣟⣿⣿⣟⣿⣿⣻⣿⣿⢿⣿⣿⣿⣿⣻⣿⣿⣿⣟⣿⡿⣿⣟⣿⣿⣿⣿⣟⣿⣿⣿⣿⣟⣿⣿
⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⡿⠻⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢉⠈⡙⠿⣿⣟⣿⣿⣿⣿⣻⣿⣿⣿⡿⣿⣿⣿⢿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣯⣿⣿⣿
⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣟⣿⣿⣿⡿⢟⣩⡡⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠐⣾⣯⢿⣿⢿⣿⣿⣽⣾⣿⣿⣿⣽⡿⣿⣽⣷⣿⣿⣻⣽⣷⣿⡿⣽⣿⡿⣟⣿⣯⣿⣿⢿⣿⣿
⣻⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣏⣶⣿⡿⠖⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡙⢿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿
⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⡿⣋⠖⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠘⢧⣿⣿⣿⣿⢿⣿⡿⣿⣿⣿⣷⣿⣟⣿⣿⡿⣿⣿⣿⢿⣿⣿⢿⣿⡿⣿⣿⣿⣿⣿⣿⣿
⢿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣷⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⠑⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⢬⡻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿
⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢓⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⢿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⡀⠀⠀⢀⠀⠀⠀⢀⠠⢀⠆⣉⠦⡀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣬⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣾⣿⣿⣷⣿⣿⣿⣿⢿⣿⣿⣿⡿⣿⣿⣿⡿⣿⣿⣿
⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⢛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠔⣌⠳⣉⢭⡙⠦⡠⡘⡠⢄⠦⣉⡠⠤⢰⠡⡎⢥⠎⣎⠰⣊⠔⢂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣾⣿⣯⣿⣷⣿⣿⣿⣿⣻⢣⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠢⡕⢪⡍⡰⢣⡵⢦⣛⠷⡱⣍⢺⠭⣚⡕⢮⡝⡣⡝⡼⢎⡹⢦⠱⣡⠚⡄⢢⠐⠤⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⢘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣻⣿⣿⣿⣿⣽⣿⣿⣿⣻⣿⣿⣟⣿⣻⣿⣿
⣾⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠇⡀⠀⠀⠀⠀⠀⠀⠀⠀⠁⡄⢳⡈⠧⡜⢆⡳⢜⣇⡺⣎⠷⣹⢭⡛⡵⣹⢳⠶⣙⣪⠽⣩⠴⣋⠴⣡⢋⢌⢣⢊⠅⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⣈⠝⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣯⣿⣿⣿⣿⢿⣿⣿⡿⣿⣿⣿⣿⣻⣿⣽⣿⣿⣿⣿⣿⣗⡵⡂⠀⠀⠀⠀⠀⠀⠀⠀⢂⠘⣢⠙⣔⢪⢓⠬⡓⣼⢱⠞⠾⣡⣳⣙⢶⣣⠭⢕⣋⣖⡳⠭⡎⠥⢣⠣⢎⡨⢆⠃⡌⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⢿⣟⣿⣿⣿⢿⣻⣿⣿⡷⣿⣟⣿⣽⣿⣿⣿
⣽⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡽⢀⠄⠀⠀⠀⠀⠀⠀⠐⡈⠒⡥⡙⠤⣓⠬⣎⡵⣚⡭⠾⣝⡳⠶⣩⠖⣓⡞⣭⠗⣺⡸⡏⢞⡜⢣⡚⡴⢌⠢⠓⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣟⣿⡿⣿⣿⣿⡿⣿⣿⣿⡿⣿⣿⣿⣿⡿⣿⣿⣿⣻⣿⣿⣿⣿⣠⡞⠀⠀⠀⠀⠀⠀⠀⠠⠠⡑⢦⠙⡜⣌⡓⢬⢒⡓⣞⣛⡲⣙⣋⢣⡛⠖⢮⡹⣓⡭⠮⠽⠩⡜⡥⢃⠳⢠⠩⡙⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⢿⣿⡿⣿⣿⢿⣿⣿⢿⣿⣿⣷⣿⣿⣿⣿⡿⣿⣿
⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⡍⠄⡀⠀⠀⠀⠀⠀⠀⠀⡘⢤⠋⡔⢦⢩⠣⡝⡸⠴⡳⣝⠴⣞⠾⣱⠫⣇⢗⡞⢾⣉⢏⠗⡭⢆⢏⠒⡆⢥⠒⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣷⣿⣿⣾⣿⢿⣿⣿
⣿⣿⡾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣄⠁⠀⠀⠀⠀⠀⠀⠠⢘⠴⡙⡌⡲⠊⣥⠨⠴⣉⠦⢭⢩⡘⢷⣉⣛⢬⡛⣜⢣⢊⡌⣚⡐⣉⢢⡝⡸⢢⣙⡐⠄⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣽⣿⣿⣷⣿⣿⣿⣟⣿⣿⣿⢂⠀⠀⠀⠀⠀⠀⠀⠐⠃⠎⠱⠈⠓⠙⢦⠛⡔⠪⡜⠌⠖⠌⢳⡈⠖⡠⠛⡄⠣⢆⡸⢁⠞⠀⠕⠚⠐⠃⠰⠁⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⣬⣿⣿⣿⣿⣿⣽⣿⣿⣿⣽⣾⣿⣿⣾⣿⣿⣿⣾⣽⣷⣿⣿⣯⣷⣿⣿⣿⣽⣿⣿
⣯⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⡾⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⡛⠄⠁⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿
⣿⣿⣷⣿⣿⣿⣟⣿⣿⣿⣯⣿⣿⣿⣟⣿⣿⣿⣿⣯⣿⣿⣿⢿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⢈⠀⢠⡀⠀⠀⠀⠀⠀⢀⠁⡘⡀⠀⠀⠀⠀⠀⢀⣄⠀⡀⠀⡠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⢿⣻⣿⣷⣿⣿⣯⣿⣿⣽⣿⣯⣿⣿⣿⣽⣿⣷⣿⣻⣿⣿⣿⢿⣿⣿
⡿⣏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⡀⠀⠀⠀⠈⠶⢉⡶⠎⠷⠉⠆⠀⠆⠀⠀⡏⡹⢇⡇⠀⠀⡰⢀⠀⡉⠾⠷⡶⠎⠱⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⡐⢌⠰⢀⡀⠀⠀⠀⠈⠒⡠⢄⠍⡴⡘⢠⢓⡝⢮⠘⠐⢢⢱⢊⠤⣁⠁⡀⠀⠀⠀⠀⡀⢢⠀⡄⠠⠀⠀⠀⠀⢀⠀⣼⣿⣿⣿⣿⣿⣿⣿⢿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿
⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣟⣿⣿⣿⣿⣿⠀⠀⠀⠠⠘⡠⢋⠦⢘⡐⢢⠙⡌⠣⠑⣊⡜⢰⠁⠆⢢⡜⡧⢃⠀⣌⢣⠫⣔⢨⢑⢂⠍⠤⣁⠢⠌⡆⠓⡌⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣷⣿⣿⣿⣷⣿⣿⣿⣿⢿⣿⣿⣿⡿⣿⣿⣿⣾⣿⣿⣿
⣷⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⡀⠑⡌⢎⢅⡜⡄⢪⠔⣡⠓⡴⢈⠂⡑⠂⢅⡾⠥⣊⠀⠄⠆⠳⣈⠶⡡⢎⡔⢲⡀⢧⡙⡌⠣⠐⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣾⣿⣿⡿⣷⣿⣿⣿⣾⣿⣿⣿⣿⣧⠀⠄⠀⠀⠀⠘⠀⠎⠴⣈⢇⣊⠢⢝⡰⠁⠐⠀⢘⡬⣚⢇⠇⢄⠈⠈⠐⠴⣂⢓⠴⡘⣂⠙⠠⠒⠀⠀⠀⠀⠀⠀⠌⠀⣸⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣯⣿⣿⣿⣿⣿⣽⣷⣿⣿⣿⣾⣿⣿⣷⣿⣿⣿⣯⣷⣿⣿⣿
⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣤⣀⡤⠀⠀⠀⠀⠈⠱⢈⠖⣨⠚⡠⢇⡁⠐⢄⠣⣔⡳⡜⣊⠆⢀⠆⢀⡚⠴⣉⠦⢡⠃⠎⠐⠀⠀⠀⠀⠀⢀⡀⠐⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣽⣿⣟⣿⣿⣯⣿⣿⣿⣿⣿⠀⠀⠀⠀⢀⠐⠈⡜⣀⠧⣍⠲⡀⠁⠈⠒⡥⢛⡜⠄⠁⠀⠀⢀⠱⣉⢆⡱⢁⠂⠀⠀⠀⠀⠀⠀⠀⢨⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣟⣿⣯⣿⣿⣿⣽⣷⣿⣿⣿⣻⣿⣿⣿⣽⣿⣿⣟⣿⣿⣽⣿⡿⣿⣿⣿
⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⢀⠠⠠⡘⠤⡱⢌⠵⣀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⢀⢣⠜⡐⡢⠁⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⡿⣿⣿⣿⣿⣽⣿⣿⣿⣟⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣯⣟⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⢿⣿⣟⣿⣟⣿⣿⣿⡿⣿⣿⣻⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠐⠄⠌⠴⡑⢢⠓⢀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠊⠥⠙⠦⢡⠑⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⢿⣻⣿⣿⣿⣿⣿⡿⣟⣿⣿⡿⣿⣿⡿⣿⣿⣟⣿⣽⣿⣿⢿⣿⣯⣿⣟⣿⣿⣿
⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠌⠘⠂⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠁⠀⠁⠔⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⢿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⢀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⡿⣿⣿⡿⣿⣿⣿⣿⣾⣿⣿⣿⣿⡿⣿⣿⢿⣿⣿⢿⣿⣯⣿⣿⣿⣿⢿⣿⣿
⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣾⣿⣿⣿⣽⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠐⠠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣟⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣾⣿⣿⣿
⣷⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⢀⠰⢈⠆⡱⢂⠭⢒⠢⢀⠲⠡⠓⠤⡉⢂⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⢿⣿⣽⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿
⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠃⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠈⠈⠐⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣯⣿⣿⣯⣿⣾⣿⣿⣿⣾⣿⣷⣿⣯⣿⣿⣿⣿⣽⣿⣾⣿⣷⣿⣿⣿⣿⣽⣿⣿
⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠉⠁⠀⠀⠀⠀⠀⢐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠠⡐⢂⠰⠐⡄⢆⡐⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠂⠀⠀⠀⠀⠀⠀⠈⠙⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⡿⣿⣿⣿⣿⣽⣿⣿⣿⣟⣿⣿⣿⣽⣿⣿⣿
⣻⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠛⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⢘⠀⠀⠀⠀⠀⠀⠀⠡⠀⠈⠀⠄⠐⠈⠀⠈⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡿⠿⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢎⠄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠢⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣌⠲⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠆⡣⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⠵⡘⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡉⢎⠵⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⢦⡹⢌⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⠿
`;
export const NEOFETCH_INFO = `
		  abdalrahman@pc
	───────────────────────────
	➜  Linux 6.15.6-arch1-1
	➜  Hyprland (Wayland)
	➜  zsh
	➜  tmux
	➜  12.06 GiB / 16.00 GiB
	➜  9999 hours, 33 mins
	───────────────────────────
`;

export const PROJECTS: Project[] = [
  {
    title: "Shafei",
    description: `A comprehensive full-stack vehicle management application 
									designed to streamline car registration, service tracking, 
									and administrative operations. Built with modern technologies 
									in a scalable monorepo architecture.`,
    image: "/images/projects/shafei.png",
    links: {
      preview: "https://shafei-web.vercel.app",
    },
  },
  {
    title: "Sputnik",
    description: `A comprehensive online learning platform for course management 
		and student progress tracking built with React, TypeScript, Hono, Prisma, and PostgreSQL.
		 Architected and developed the complete full-stack learning management system featuring 
		 video streaming, quizzes, progress tracking, and payment integration.
		`,
    image: "/images/projects/sputnik.png",
    links: {
      github: "https://github.com/abdlrhmn0x7e/sputnik",
    },
  },
  {
    title: "Casecobra",
    description: `A modern e-commerce platform for custom phone cases, 
		built with cutting-edge web technologies. Create, customize, and 
		buy phone cases. built with Next.js, Tailwind, and PostgreSQL. featuring
		stripe payment integration, product management, and a responsive design.`,
    image: "/images/projects/casecobra.webp",
    links: {
      github: "https://github.com/abdlrhmn0x7e/casecobra",
      preview: "https://casecobra-lake-iota.vercel.app",
    },
  },
  {
    title: "PingPanda",
    description: `A modern SAAS landing page for real time discord notifications, built with Next.js, Tailwind, and PostgreSQL.`,
    image: "/images/projects/pingpanda.webp",
    links: {
      github: "https://github.com/abdlrhmn0x7e/pingpanda",
      preview: "https://ping-panda-beta-one.vercel.app",
    },
  },
];

export const TERMINAL_COMMANDS = [
  {
    command: "cd <directory>",
    description: "Navigate to a directory",
  },
  {
    command: "ls",
    description: "List files in the current directory",
  },
  {
    command: "rm -rf /",
    description: "Delete everything",
  },
  {
    command: "help",
    description: "Show this help",
  },
  {
    command: "flip",
    description: "Flip a coin",
  },
  {
    command: "exit",
    description: "Exit the terminal",
  },
  {
    command: "date",
    description: "Show the current date",
  },
  {
    command: "fastfetch",
    description: "Show system information",
  },
  {
    command: "ai <prompt>",
    description: "Generate a response using AI",
  },
] as const;

export const DIRECTORIES = ["~", "projects", "blog"] as const;
