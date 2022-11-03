import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';
import SearchBar from '../../components/ready/platform/SearchBar/SearchBar';
import Group from '../../components/utils/Group/Group';
import Section from '../../components/utils/Section/Section';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {timelineOppositeContentClasses} from '@mui/lab/TimelineOppositeContent';
import { TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import dayjs from 'dayjs';

function MealsPage() {
  let [date, setDate] = useState(dayjs(new Date()));
  return (
    <div className="MealsPage">
      <Page
        header={
          <div style={{display: "flex", justifyContent:"space-between", width: "100%"}}>
            <SearchBar/>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date"
              inputFormat="DD/MM/YYYY"
              value={date}
              onChange={setDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          </div>
          
        }>
        <Column widthPoints={2}>
          <Timeline position="right"
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.06,
              },
            }}>
            <TimelineItem>
              <TimelineOppositeContent color="textSecondary">
                8:00
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Group>
                <Section
                  header={<div>Breakfast</div>}>
                    Coś
                </Section>
              </Group>
            </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="textSecondary">
                10:00
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Group>
                  <Section
                    header={<div>Snack I</div>}>
                  </Section>
                </Group>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="textSecondary">
                12:00
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Group>
                  <Section
                    header={<div>Lunch</div>}>
                  </Section>
                </Group>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="textSecondary">
                16:00
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Group>
                  <Section
                    header={<div>Snack II</div>}>
                  </Section>
                </Group>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="textSecondary">
                18:00
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Group>
                  <Section
                    header={<div>Dinner</div>}>
                  </Section>
                </Group>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="textSecondary">
                20:00
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Group>
                  <Section
                    header={<div>Snack III</div>}>
                  </Section>
                </Group>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Column>
        <Column widthPoints={1}>
          <Group>
            <Section
              header={<div>Summary</div>}>
            </Section>
          </Group>
        </Column>
      </Page>
    </div>
  );
}

export default MealsPage;
