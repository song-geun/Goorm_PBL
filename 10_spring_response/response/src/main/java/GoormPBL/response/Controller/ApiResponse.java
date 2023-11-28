package GoormPBL.response.Controller;

import GoormPBL.response.Entity.Student;
import GoormPBL.response.Repository.StudentRepository;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.ArrayList;
@Getter
public class ApiResponse {
    private static class status{
        int code = 200;
        String message = "OK";
        public status(int code, String message)
        {
            this.code = code;
            this.message = message;
        }
    };
    ArrayList<Student> result;
    private  static class metadata{
        int resultCount= 0;
    };
    public ApiResponse(int code, String message, ArrayList<Student> result)
    {
        status st = new status(code, message);
        this.result = result;
    }
}
