import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import useFetch from "../custom-hooks/useFetch";

const AutoCompleteTitle = ({title, setTitle}) => {

    const {data: posts} = useFetch('http://localhost:8000/posts');

    return (
        <div className="autoCompleteTitle">
            {posts &&
                <Autocomplete
                    inputValue={title}
                    onInputChange={(e, newTitle) => setTitle(newTitle)}
                    options={posts}
                    getOptionLabel={option => typeof option === "string" ? option : option.title}
                    key={option => option.id}
                    renderInput={(params) => <TextField {...params} />}
                />}
        </div>
    )
}
export default AutoCompleteTitle;