import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {AudioPlayer} from "react-audio-player-component";

interface IProps {
    timeColor?: '#fff' | '#AEAEAE'
}

export const Audio = ({ timeColor = '#fff' }: IProps) => {
    const audioRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            const timer = audioRef.current.querySelector("[data-testid='timer']")
            timer?.setAttribute('style', `color: ${timeColor}; font-size: 16px; font-weight: 500;`)
        }
    }, [audioRef.current]);

    return (
        <div ref={audioRef}>
            <AudioPlayer
                src={'https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg'}
                width={150}
                minimal={true}
                trackHeight={18}
                barWidth={2}
                gap={1}
                visualise={true}
                backgroundColor="transparent"
                barColor="#AEAEAE"
                barPlayedColor="#fff"
                skipDuration={2}

                showLoopOption={true}
                showVolumeControl={true}
                hideSeekBar={true}
                hideSeekKnobWhenPlaying={true}
            />
        </div>

    );
};


const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PlayButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Waveform = styled.div`
  flex-grow: 1;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #007aff;
  transition: width 0.1s linear;
`;

const Duration = styled.span`
  font-size: 14px;
  color: #888;
`;
