import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-->0)
        {
            String a = sc.nextLine();//substring
            String b = sc.nextLine();//subseq
            int i = 0;
            int j = 0;
            while(j<b.length() && i<a.length())
            {
                if(a.charAt(i)==b.charAt(j))
                j++;
                i++;
            }
            int ans = a.length();
            // if(j==b.length())
            ans += b.length()-j+1;
            System.out.println(ans);
        }
    }
}