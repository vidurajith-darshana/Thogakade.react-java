package lk.ijse.market.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

@RestController
@RequestMapping("market/v1/upload")
@CrossOrigin
public class UploadController {

    private static String UPLOAD_DIR="images/customer";

    @PostMapping("/customer")
    public boolean uploadCustomerPhoto(@RequestParam("file") MultipartFile file, HttpServletRequest request){
        try{

            String fileName=file.getOriginalFilename();
            String path=request.getServletContext().getRealPath("")+UPLOAD_DIR+ File.separator +fileName;
            InputStream inputStream=file.getInputStream();
            System.out.println(fileName+" "+path+" "+inputStream);

            saveFile(inputStream,path);
            return true;

        }catch(Exception e){
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    private void saveFile(InputStream inputStream,String path){
        try{
            OutputStream outputStream=new FileOutputStream(new File(path));
            int read=0;
            byte[] bytes=new byte[1024];
            while((read=inputStream.read())!=-1){
                outputStream.write(bytes,0,read);
            }
            outputStream.flush();
            outputStream.close();
        }catch(Exception e){
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }
}
