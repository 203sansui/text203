
#include<bits/stdc++.h>
using namespace std;
class Person{
	private:
		int num;
		char name[10];
	public:
		void input(){
			cout<<"姓名"<<":";cin>>name;
			cout<<"编号"<<":";cin>>num;	
        }
        void disp(){
        	cout<<"姓名："<<name<<endl;
        	cout<<"编号："<<num<<endl;
		}
};
			
			

class Student:public Person{
	private:
		int Classnumber;
		int score;
		
	public:
		void input(){
			Person::input();
			cout<<"班号"<<":";cin>>Classnumber;
			cout<<"分数"<<":";cin>>score;	
		}
		void disp(){
			Person::disp();
			cout<<"班号"<<":"<<Classnumber<<endl;
			cout<<"分数"<<":"<<score<<endl;
		}
};

class Teacher:public Person{
	private:
		char Jobtitle[10];
		char Department[10];
	public:
		void input(){
			Person::input();
			cout<<"职称"<<":";cin>>Jobtitle;
			cout<<"部门"<<":";cin>>Department;	
		}
		void disp(){
			Person::disp();
			cout<<"职称"<<":"<<Jobtitle<<endl;
			cout<<"部门"<<":"<<Department<<endl;
		}
};

int main(){
	system("chcp 65001");//用于在控制台输出中文
	Student s1;
	Teacher t1;
	cout<<"输入一个学生的信息:"<<endl;
	s1.input();
	cout<<"显示一个学生的信息:"<<endl;
	s1.disp();
	
	cout<<"输入一个教师的信息:"<<endl;
	t1.input();
	cout<<"显示一个教师的信息:"<<endl;
	t1.disp();
	return 0;
}