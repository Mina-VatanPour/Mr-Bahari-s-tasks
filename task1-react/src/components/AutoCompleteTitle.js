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
                    onInputChange={(event, newTitle) => setTitle(newTitle)}
                    options={posts}
                    getOptionLabel={option => option.title}
                    key={option => option.id}
                    renderInput={(params) => <TextField {...params} />}
                    open={title.length >= 2}
                />}
        </div>
    )
}
export default AutoCompleteTitle;