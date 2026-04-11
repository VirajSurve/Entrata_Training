#include<iostream>
using namespace std;

class BurgerMaking{
    public:
        virtual void prepare() = 0;
};

class normal: public BurgerMaking{
    public:
    void prepare() override{
        cout << "normal burger is preparing";
    }
};

class Huge : public BurgerMaking{
    public:
    void prepare() override{
        cout << "Huge burger is preparing";
    }
};

class Premium : public BurgerMaking{
    public:
    void prepare() override{
        cout << "Premium burger is preparing";
    }
};

class factory{
    public:
    BurgerMaking* makeburger(string name){
        int type = 0;
        if(name == "normal"){
            type = 1;
        }
        else if(name == "Huge"){
            type = 2;
        }else if(name == "Premium"){
            type = 3;
        }

        switch(type){
            case 1:
                return new normal();

            case 2 :
                return new Huge();

            case 3:
                return new Premium();

            default:
                return NULL;
        }
    }
};

int main(){
    factory* f = new factory();
    BurgerMaking *obj = f->makeburger("Huge");
    if(obj)
    obj->prepare();
    else
        cout << "no such burger available";
}
