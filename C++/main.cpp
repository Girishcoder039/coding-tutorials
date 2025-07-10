#include<string>


bool isValid(std::string s) 
    {
        std::string a="";
        for(int i=0;i<s.length();i++){
            if(s[i]!=']' ||s[i]!=')' ||s[i]!='}' )
            a+=s[i];
            if(i>0)
            {
                switch(a[a.length()-1])
                {
                    case '{': if(s[i]=='}')
                                a.erase(a.length()-1);
                                break;
                    case '(': if(s[i]==')')
                                a.erase(a.length()-1);
                                break;
                    case '[': if(s[i]==']')
                                a.erase(a.length()-1);
                                break;
                }
            }
        }
        return a.length()<1;
    }

int main(){
    isValid("()");
}