package GoormPBL.response.Controller;

import org.springframework.web.bind.annotation.PathVariable;

public interface MyController {

    public void save(@PathVariable String grade, @PathVariable String name);
    public ApiResponse responseAll();
    public ApiResponse responseGet(@PathVariable Long grade);
}
