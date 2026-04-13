<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    $books = [
        [
            'name' => 'The Martian',
            'author' => 'Andy Weir',
            'releaseYear' => 2011,
        ],
        [
            'name' => 'Project Hail Mary',
            'author' => 'Andy Weir',
            'releaseYear' => 2021,
        ],
        [
            'name' => 'Dune',
            'author' => 'Frank Herbert',
            'releaseYear' => 1965,
        ]
    ];

    function filterByAuthor($books, $author)
    {
        $filteredBooks = [];

        foreach ($books as $book) {

            if ($book['author'] === $author) {
                $filteredBooks[] = $book;
            }

        }

        return $filteredBooks;
    }

    ?>

    <h2>Books by Andy Weir</h2>

    <ul>

    <?php foreach (filterByAuthor($books, 'Andy Weir') as $book) : ?>

        <li>
            <?= $book['name']; ?>

            (<?= $book['releaseYear']; ?>) - By <?= $book['author']; ?>
        </li>

    <?php endforeach; ?>

    </ul>
    
    <!-- Lambda Function -->
    <?php
    $filterByAuthorLambda=function ($books, $author)
    {
        $filteredBooks = [];

        foreach ($books as $book) {

            if ($book['author'] === $author) {
                $filteredBooks[] = $book;
            }

        }

        return $filteredBooks;
    }

    ?>

    <h2>Books by Andy Weir</h2>

    <ul>

    <?php foreach ($filterByAuthorLambda($books, 'Andy Weir') as $book) : ?>

        <li>
            <?= $book['name']; ?>

            (<?= $book['releaseYear']; ?>) - By <?= $book['author']; ?>
        </li>

    <?php endforeach; ?>

    </ul>

    <?php

        $filteredBooks = array_filter($books, function ($book) {

            return $book['releaseYear'] < 2000;

        });

    ?>

    <h2>Books Released Before 2000</h2>

    <ul>
    <?php foreach ($filteredBooks as $book): ?>

    <li>
    <?= $book['name'] ?> (<?= $book['releaseYear'] ?>)
    </li>

    <?php endforeach; ?>
    </ul>

</body>
</html>