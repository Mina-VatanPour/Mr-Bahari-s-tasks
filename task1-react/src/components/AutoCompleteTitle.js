import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutoCompleteTitle = ({title, setTitle, posts}) => {

    return ( <div className="Auto-complete-title">
            {posts && <Autocomplete
                inputValue={title}
                onInputChange={(e, newTitle) => setTitle(newTitle)}
                options={posts}
                getOptionLabel={(option) => typeof option === "string" ? option : option.title}
                renderInput={(params) => (
                    <TextField {...params} />
                )}
            />}
        </div>
    )
}
export default AutoCompleteTitle;