import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";

function App() {
  const [jsonData, setJsonData] = useState(null);
  const [projectIds, setProjectIds] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [filteredEdits, setFilteredEdits] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const json = JSON.parse(e.target.result);
      setJsonData(json);

      const ids = [...new Set(json.data.map((item) => item.id.split("/")[0]))];
      setProjectIds(ids);
    };

    reader.readAsText(file);
  };

  const handleProjectChange = (value) => {
    setSelectedProject(value);

    if (value) {
      const filtered = jsonData.data.filter((item) => item.id.startsWith(`${value}/`));
      const sorted = filtered.sort((a, b) => new Date(b.created_at.__time__) - new Date(a.created_at.__time__));
      setFilteredEdits(sorted);
    } else {
      setFilteredEdits([]);
    }
  };

  return (
    <div className="container mx-auto">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>JSON File Upload</CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="file" accept=".json" onChange={handleFileUpload} />
        </CardContent>
      </Card>

      {projectIds.length > 0 && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Select Project</CardTitle>
          </CardHeader>
          <CardContent>
            <Select onValueChange={handleProjectChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select project" />
              </SelectTrigger>
              <SelectContent>
                {projectIds.map((id) => (
                  <SelectItem key={id} value={id}>
                    {id}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      )}

      {filteredEdits.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Edits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {filteredEdits.map((edit) => (
                <li key={edit.id} className="mb-4">
                  <p>
                    <strong>Created At:</strong> {new Date(edit.created_at.__time__).toLocaleString()}
                  </p>
                  <p>
                    <strong>Created By:</strong> {edit.created_by}
                  </p>
                  <p>
                    <strong>Status:</strong> {edit.status}
                  </p>
                  {edit.content?.output && (
                    <div className="mt-2">
                      <strong>Output:</strong>
                      <pre className="bg-muted p-2 rounded">{edit.content.output}</pre>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default App;
