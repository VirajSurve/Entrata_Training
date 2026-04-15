<?php
namespace App\Models;

use App\Core\Database;

class Todo
{
    private \PDO $pdo;

    public function __construct(?\PDO $pdo=null)
    {
        $this->pdo=$pdo??Database::getInstance()->getConnection();
    }

    public function all(): array
    {
        return $this->pdo->query('SELECT * FROM todos ORDER BY id DESC')->fetchAll();
    }

    public function find(int $id): ?array
    {
        $stmt=$this->pdo->prepare('SELECT * FROM todos WHERE id = :id LIMIT 1');
        $stmt->execute([':id'=>$id]);

        $row=$stmt->fetch();
        return $row?:null;
    }

    public function create(string $title,?string $description=null): array
    {
        $stmt=$this->pdo->prepare(
            'INSERT INTO todos (title, description, is_completed) VALUES (:title, :description, false) RETURNING *'
        );

        $stmt->execute([
            ':title'=>$title,
            ':description'=>$description,
        ]);

        $row=$stmt->fetch();
        return $row?:[];
    }

    public function updatePartial(int $id,array $fields): ?array
    {
        if(empty($fields)){
            return $this->find($id);
        }

        $allowed=['title','description','is_completed'];
        $set=[];
        $params=[':id'=>$id];

        foreach($fields as $key=>$value){
            if(!in_array($key,$allowed,true)){
                continue;
            }

            $param=':'.$key;
            $set[]="{$key} = {$param}";
            $params[$param]=$key==='is_completed'?((bool)$value?'true':'false'):$value;
        }

        if(empty($set)){
            return $this->find($id);
        }

        $sql='UPDATE todos SET '.implode(', ',$set).' WHERE id = :id';
        $stmt=$this->pdo->prepare($sql);
        $stmt->execute($params);

        return $this->find($id);
    }

    public function delete(int $id): bool
    {
        $stmt=$this->pdo->prepare('DELETE FROM todos WHERE id = :id');
        $stmt->execute([':id'=>$id]);

        return $stmt->rowCount()>0;
    }
}
