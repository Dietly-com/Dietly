import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function MealsNutrients(props) {
    const { t } = useTranslation();
    let [rows, setRows] = useState([])

    function createRow(nutrientViewName, quantity, unitViewName) {
        return { nutrientViewName, quantity, unitViewName };
    }

    useEffect(()=>{
        let effectRows = [];
        for (const homeNutrient of props.userMealsNutrients) {
            effectRows.push(createRow(t(homeNutrient.nutrient.viewName), homeNutrient.quantity, homeNutrient.nutrient.unit.viewName));
        }
        setRows(effectRows);
    }, [])

    return (
        <TableContainer>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>{t('Nutrients')}</TableCell>
                    <TableCell align="right">{props.date.toString()}</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.nutrientViewName}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.nutrientViewName}
                    </TableCell>
                    <TableCell align="right">{row.quantity} {row.unitViewName}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
  
export default MealsNutrients;