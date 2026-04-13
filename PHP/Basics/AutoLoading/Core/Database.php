<?php

class Database
{
    public $connection;

    protected $statement;

    public function __construct($config,$user='root',$password='1234')
    {
        $dsn = 'mysql:'.http_build_query($config,'',';');

        //dd($dsn);

        $this->connection = new PDO($dsn,$user,$password,[
            PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC
        ]);     
    }

    public function query($query, $params = [])
    {
        $this->statement = $this->connection->prepare($query);
        $this->statement->execute($params);

        return $this;
    }

    public function fetch()
    {
        return $this->find();
    }

    public function fetchAll()
    {
        return $this->get();
    }

    public function get()
    {
        return $this->statement->fetchAll();
    }

    public function find()
    {
        return $this->statement->fetch();
    }

    public function findOrFail($code = 404)
    {
        $result = $this->find();

        if (!$result) {
            abort($code);
        }

        return $result;
    }
}
