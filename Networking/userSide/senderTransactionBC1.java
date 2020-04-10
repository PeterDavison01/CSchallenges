import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class FileExample1 {

    public static void main(String[] args) {

        String content = "Barcode 1\n";

        // If the file doesn't exists, create and write to it
		// If the file exists, truncate (remove all content) and write to it
        try (FileWriter writer = new FileWriter("log.txt");
             BufferedWriter bw = new BufferedWriter(writer)) {

            bw.write(content);

        } catch (IOException e) {
            System.err.format("IOException: %s%n", e);
        }

    }
}
