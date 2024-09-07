
        function extractGrid() {
            const cells = document.querySelectorAll('.cell');
            let grid = Array.from({ length: 9 }, () => Array(9).fill(0));

            cells.forEach((cell, cellIndex) => {
                const rows = cell.querySelectorAll('.row');
                rows.forEach((row, rowIndex) => {
                    const values = row.querySelectorAll('.rows');
                    values.forEach((value, valueIndex) => {
                        const text = value.textContent.trim();
                        if (text) {
                            grid[Math.floor(cellIndex / 3) * 3 + rowIndex][cellIndex % 3 * 3 + valueIndex] = parseInt(text, 10);
                        }
                    });
                });
            });
            console.log("Extracted Grid:", grid); // Debugging
            return grid;
        }

        function isValid(board, row, col, num) {
            for (let i = 0; i < 9; i++) {
                if (board[row][i] === num || board[i][col] === num) return false;
            }
            const startRow = Math.floor(row / 3) * 3;
            const startCol = Math.floor(col / 3) * 3;
            for (let i = startRow; i < startRow + 3; i++) {
                for (let j = startCol; j < startCol + 3; j++) {
                    if (board[i][j] === num) return false;
                }
            }
            return true;
        }

        function fillGrid(board) {
            function findEmptyCell() {
                for (let row = 0; row < 9; row++) {
                    for (let col = 0; col < 9; col++) {
                        if (board[row][col] === 0) return { row, col };
                    }
                }
                return null;
            }

            const emptyCell = findEmptyCell();
            if (!emptyCell) return true;

            const { row, col } = emptyCell;
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            for (let i = numbers.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
            }

            for (const num of numbers) {
                if (isValid(board, row, col, num)) {
                    board[row][col] = num;
                    if (fillGrid(board)) return true;
                    board[row][col] = 0;
                }
            }

            return false;
        }

        function updateGrid(board) {
            const cells = document.querySelectorAll('.cell');
            cells.forEach((cell, cellIndex) => {
                const rows = cell.querySelectorAll('.row');
                rows.forEach((row, rowIndex) => {
                    const values = row.querySelectorAll('.rows');
                    values.forEach((value, valueIndex) => {
                        const newValue = board[Math.floor(cellIndex / 3) * 3 + rowIndex][cellIndex % 3 * 3 + valueIndex];
                        value.textContent = newValue || '';
                    });
                });
            });
            console.log("Updated Grid:", board); // Debugging
        }

        // Main execution
        let grid = extractGrid();
        fillGrid(grid);
        updateGrid(grid);
